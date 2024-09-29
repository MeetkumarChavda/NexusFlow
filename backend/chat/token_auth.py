from django.contrib.auth.models import AnonymousUser
from channels.db import database_sync_to_async
from channels.middleware import BaseMiddleware
from rest_framework_simplejwt.tokens import AccessToken
from useraccount.models import User
@database_sync_to_async
def get_user(token_key):
    """
    Retrieves the user associated with the given token key.

    This function attempts to decode the provided JWT token and fetch
    the corresponding user from the database. If the token is invalid
    or the user does not exist, it returns an AnonymousUser.

    Args:
        token_key (str): The JWT token key provided by the client.

    Returns:
        User: The User object associated with the token, or AnonymousUser if invalid.
    """
    try:
        # Decode the token to extract the user ID
        token = AccessToken(token_key)
        # Retrieve the user object from the database
        user_id = token.payload['user_id']
        return User.objects.get(pk=user_id)
    except Exception as e:
        return AnonymousUser


class TokenAuthMiddleware(BaseMiddleware):
    """
    Middleware for authenticating WebSocket connections using JWT tokens.

    This middleware extracts the token from the WebSocket connection's
    query string, retrieves the associated user, and attaches the user
    object to the connection scope.
    """
    def __init__(self, inner):
        """
        Initializes the TokenAuthMiddleware.

        Args:
            inner (ASGI application): The inner ASGI application to wrap.
        """
        self.inner = inner
    
    async def __call__(self, scope, receive, send):
        """
        Handles the ASGI call for the middleware.

        Extracts the JWT token from the query string, retrieves the user
        associated with the token, and attaches the user to the scope.

        Args:
            scope (dict): The connection scope containing information about the connection.
            receive (callable): A callable to receive messages.
            send (callable): A callable to send messages.

        Returns:
            await: Calls the inner application with the updated scope.
        """
        # Parse the query string to extract the token
        query = dict((x.split('=') for x in scope['query_string'].decode().split('&')))
        token_key = query.get('token')
        # Retrieve the user associated with the token and attach it to the scope
        scope['user'] = await get_user(token_key)
        # Call the inner ASGI application with the updated scope
        return await super().__call__(scope, receive, send)