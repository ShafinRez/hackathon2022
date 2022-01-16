from __future__ import print_function

import datetime
import os.path
import logging

from google.auth.transport.requests import Request
from django.http import JsonResponse
from google.oauth2.credentials import Credentials
from google_auth_oauthlib.flow import InstalledAppFlow
from googleapiclient.discovery import build
from googleapiclient.errors import HttpError
import json

SCOPES = 'https://www.googleapis.com/auth/calendar'


# Get all calendar events
def calendar(request):
    if request.method == 'GET':
        creds = None
        if os.path.exists('token.json'):
            creds = Credentials.from_authorized_user_file('token.json', SCOPES)
            # If there are no (valid) credentials available, let the user log in.
        if not creds or not creds.valid:
            if creds and creds.expired and creds.refresh_token:
                    creds.refresh(Request())
            else:
                flow = InstalledAppFlow.from_client_secrets_file(
                        'key.json', SCOPES)
                creds = flow.run_local_server(port=0)
            # Save the credentials for the next run
            with open('token.json', 'w') as token:
                token.write(creds.to_json())
        try:
            service = build('calendar', 'v3', credentials=creds)

            # Call the Calendar API
            now = datetime.datetime.utcnow().isoformat() + 'Z'  # 'Z' indicates UTC time
            events_result = service.events().list(calendarId='primary', timeMin=now, singleEvents=True, orderBy='startTime').execute()
            events = events_result.get('items', [])
            data = json.dumps(events)
        except HttpError as error:
            print('An error occurred: %s' % error)


        return JsonResponse(data, safe=False)

def event(request, event_id):
    creds = None
    if os.path.exists('token.json'):
            creds = Credentials.from_authorized_user_file('token.json', SCOPES)
        # If there are no (valid) credentials available, let the user log in.
    if not creds or not creds.valid:
        if creds and creds.expired and creds.refresh_token:
                creds.refresh(Request())
        else:
            flow = InstalledAppFlow.from_client_secrets_file(
                        'key.json', SCOPES)
            creds = flow.run_local_server(port=0)
        # Save the credentials for the next run
        with open('token.json', 'w') as token:
            token.write(creds.to_json())
    
    event = None
    if request.method == 'GET':
        event = service.events().get(calendarId='primary', eventId=event_id).execute()

    if request.method == 'PUT':
        event = service.events().insert(calendarId='primary', body=json.loads(request.body)).execute()

    if request.method == 'POST':
        event = service.events().update(calendarId='primary', eventId=event_id, body=json.loads(request.body)).execute()

    if request.method == 'DELETE':
        event = service.events().delete(calendarId='primary', eventId=event_id).execute()

    return JsonResponse(event, safe=False)









    


