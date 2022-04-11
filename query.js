const { User, Article, UserBookmark } = require('./models');
const userbookmark = require('./models/userbookmark');

function stringify(data) {
  console.log(JSON.stringify(data, null, 4))
}

const getAllUsers = async () => {
  try {
    // execute query here
    // Return the result
    const users = await User.findAll({
      include: Article
    })
    stringify(users);
  } catch (error) {
    console.log(error)
    return false
  }
}

const articlesWithCreator = async () => {
  try {
    const articles = await Article.findAll({
      include: {
        model: User, 
        as: 'creator'
      }
    })
    stringify(articles)
  } catch (error) {
    console.log(error)
    return false
  }
}

//Bonus
const getAllBookmarks = async () => {
  try {
    // execute query here
    // Return the result
    const bookmarks = await UserBookmark.findAll({
      include: [{
        model: User,
        as: 'bookmarks'
      },
      {
        model: Article,
        as: 'bookmarks'
      }]
    })
    stringify(bookmarks)
  } catch (error) {
    console.log(error)
    return false
  }
}

module.exports = {
  articlesWithCreator,
  getAllBookmarks,
  getAllUsers,
  stringify
}
