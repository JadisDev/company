import { COORDENATE } from '../store/action/actionsType'

export function coordenate(object) {
    if (object.coordinates !== "") {
        return {
            type: COORDENATE,
            payload: {
                'lat': object.coordinates.lat,
                'lng': object.coordinates.lng
            }
        }
    }

    return {
        type: COORDENATE,
        payload: {
            'lat': 1,
            'lng': 1
        }
    }
}