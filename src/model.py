from pymongo import MongoClient

def connectToDB():
    #Connects to the Mongo App
    client = MongoClient('mongo "mongodb+srv://devspot-o9ssu.mongodb.net/test"  --username hwarsi')
    print(client)
    
    #Database name
    db = DevSpot.Comments
    print(db)
    

    return db