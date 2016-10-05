import falcon
import images

'''Initialize my restful application'''
api = application = falcon.API()

'''Path where uploaded images will be saved'''
storage_path = '/home/evellyn'

'''Initialize a collection of images'''
image_collection = images.Collection(storage_path)
'''Initialize an image item'''
image = images.Item(storage_path)

'''Define a route for image collection resource'''
'''The user can upload multiple images at once'''
api.add_route('/images', image_collection)
'''Define a route for an image item'''
'''The use can request a image by its name'''
api.add_route('/images/{name}', image)

