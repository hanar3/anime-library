
export default function isAuthenticated(next) {
  return (root, args, context, info) => {
    if (!context.currentUser) {
      return { code: 401, message: 'Unauthorized' }
    }
    return next(root, args, context, info);

  }
}