const RolePermission = require('../models').RolePermission;
const Permission = require('../models').Permission;

// El helper es una clase que nos ayudará a verificar los permisos de los usuarios en las rutas,
// para que no tengamos que repetir el código en cada ruta, y solo lo llamemos cuando sea necesario.
class Helper {
    constructor() {}

    checkPermission(roleId, permName) {
        return new Promise(
            (resolve, reject) => {
                Permission.findOne({
                    where: {
                        perm_name: permName
                    }
                }).then((perm) => {
                    RolePermission.findOne({
                        where: {
                            role_id: roleId,
                            perm_id: perm.id
                        }
                    }).then((rolePermission) => {
                        if(rolePermission || roleId == 1) {
                            resolve(rolePermission);
                        } else {
                            reject({message: 'Forbidden'});
                        }
                    }).catch((error) => {
                        reject(error);
                    });
                }).catch(() => {
                    reject({message: 'Forbidden'});
                });
            }
        );
    }
}


module.exports = Helper;