
from flask import Blueprint, request, make_response
from google.cloud import datastore
import json
import constants

APP_URL = 'https://osu-craft-center-capstone-f22.uw.r.appspot.com'

client = datastore.Client()

bp = Blueprint('term', __name__, url_prefix='/term')


@bp.route('', methods=['POST', 'GET', 'OPTIONS', 'PUT', 'DELETE'])
def term_get_put():
    if request.method == 'PUT':
        
        content = request.get_json()
        query = client.query(kind=constants.term)
        results = list(query.fetch())

        if not results:
            # Need to create the term if none exists. 
            new_term = datastore.entity.Entity(key=client.key(constants.term))
            new_term.update({
                "year": content["year"],
                "term": content["term"]
            })
            client.put(new_term)
        
        else:
            # Otherwise the current result is updated.
            term = results.pop()
            term.update({
                "year": content["year"],
                "term": content["term"]
            })
            client.put(term)

        res = make_response()
        res.headers.set("Access-Control-Allow-Origin", "*")
        # For updates to resources No Content status is sent.
        res.status_code = 204
        # print(res)
        return res

    elif request.method == 'GET':
        query = client.query(kind=constants.term)
        results = list(query.fetch())
        for e in results:
            e['id'] = e.key.id
        res = make_response(json.dumps(results))
        res.headers.set("Access-Control-Allow-Origin", "*")
        print(res)
        return res

    elif request.method == 'OPTIONS':
        res = make_response("")
        
        res.headers.set('Access-Control-Allow-Origin', "*")
        res.headers.set("Access-Control-Allow-Methods", "*")
        res.headers.set("Access-Control-Allow-Headers", "*")
        print(res)
        return res
    
    else:
        return ({'Error': 'Method not recognized'}, 415)