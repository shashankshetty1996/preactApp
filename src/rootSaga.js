import { takeEvery, all } from 'redux-saga/effects';
import ACTIONS from './api-config/actions.constants';
import getBooks from './components/books/Books.saga';
import getArticles from './components/articles/Articles.saga';

export default () =>
	all([
		takeEvery(ACTIONS.BOOKS.GET_BOOK_LIST, getBooks),
		takeEvery(ACTIONS.ARTICLES.GET_ARTICLES_LIST, getArticles)
	]);
