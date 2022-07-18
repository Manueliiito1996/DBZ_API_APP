import requests
import matplotlib.pyplot as plt
import matplotlib.image as img

character = input('Introduce el Nombre de un Personaje: ')
url = 'http://localhost/api/data/characters/' + character
res = requests.get(url)

if res.status_code != 200:
    print('No se ha encontrado ningun Personaje')
    exit()


imagen = img.imread(res.json()['imageUrl'])
plt.title(res.json()['name'])
#plt.xlabel(res.json()['main_ability'])
#plt.ylabel(res.json()['planet'])
imgplot = plt.imshow(imagen)
plt.show()


