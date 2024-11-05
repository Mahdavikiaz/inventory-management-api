const authorize = (roles) => (req, res, next) => {
  // Pastikan req.user tersedia
  if (!req.user || !req.user.role) {
    return res.status(403).json({
      error: 'Forbidden: User is not authenticated or role is missing.',
    });
  }

  // Cek apakah role user termasuk dalam role yang diizinkan
  if (!roles.includes(req.user.role)) {
    return res.status(403).json({
      error: 'Forbidden: You do not have permission to access this resource.',
    });
  }

  next(); // Lanjutkan ke middleware atau handler berikutnya
};

module.exports = authorize;
