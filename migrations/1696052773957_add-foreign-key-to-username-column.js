exports.up = (pgm) => {
  pgm.addConstraint('playlists', 'fk_playlists.username_users.id', 'FOREIGN KEY(username) REFERENCES users(id) ON DELETE CASCADE');
};

exports.down = (pgm) => {
  pgm.dropConstraint('playlists', 'fk_playlists.username_users.id');
};
