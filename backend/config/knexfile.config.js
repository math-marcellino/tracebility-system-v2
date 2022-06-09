module.exports = {
  development: {
    client: 'mysql',
    connection: {
      host: 'bviccpl2ij45fjkehpq8-mysql.services.clever-cloud.com',
      user: 'uzfjw0fn9hukslht', // replace with your mysql username
      password: 'dPKiV0jJ5RMiWVkzfSZo', // replace with your mysql password
      database: 'bviccpl2ij45fjkehpq8'
    },
    debug: true,
    pool: { 
      min: 2, 
      max: 5 
    }
  }
};