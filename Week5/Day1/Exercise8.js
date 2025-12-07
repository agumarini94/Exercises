function getAction(accion) {
    switch (accion) {
        case 'Admin':
            return ('Manage users and settings');
        case 'editor':
            return ('Edit content');
        case 'viewer':
            return ('View content');
        case 'guest':
            return ('limited access');
        case 'unknown':
            return ('Invalid role');
    }
}
console.log(getAction('editor'));
