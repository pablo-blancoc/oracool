from db.postgres import db_cursor

def retrieve_all_messages(user_id):
    try:
        with db_cursor() as cur:
            cur.execute("SELECT * FROM messages WHERE user = %s", (user_id,))
            result = cur.fetchall()
            if result is None:
                return "No messages found for this user."
            else:
                return result
    except Exception as err:
        print(err)
        return None
    
def retrieve_all_messages_by_user(user_id):
    try:
        with db_cursor() as cur:
            cur.execute("SELECT * FROM messages WHERE user = %s AND by_user = True", (user_id,))
            result = cur.fetchall()
            if result is None:
                return "No messages found for this user."
            else:
                return result
    except Exception as err:
        print(err)
        return None

def upload_message(user_id, content, by_user):
    """
    Upload a message to the database.
    
    :param user_id: UUID of the user.
    :param content: Text content of the message.
    :param by_user: Boolean indicating if the message is by the user (True) or by the chatbot (False).
    """
    
    try:
        
        # SQL query to insert the message
        insert_query = """
            INSERT INTO messages (user, content, by_user)
            VALUES (%s, %s, %s)
        """
        with db_cursor() as cur:
            # Execute the query
            cur.execute(insert_query, (user_id, content, by_user))
            
            # Commit the changes
            cur.connection.commit()
        
    except Exception as error:
        print(f"Error: {error}")
    

# Example usage:

# upload_message('user_uuid_here', 'Hello chatbot!', True)

# upload_message('user_uuid_here', 'Hello user!', False)