function canAccess(role, isActive) {
    if ((role === 'admin' || role === 'editor') && isActive) {
        return 'true'}
     else {
        return 'false'
    }
}