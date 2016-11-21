var app = angular.module('reader', ['ngRoute']);
app.config([
	'$routeProvider',
<<<<<<< HEAD
	function($routeProvider) {
		$routeProvider.when('/', {
			templateUrl: 'reader/login/login.html',
			controller: 'loginCtrl'

		}).when('/readPage', {
			templateUrl: 'reader/readPages/readPage.html',
			controller: 'readCtrl'
		}).when('/bookmark', {
			templateUrl: 'reader/readPages/bookmark.html',
			controller: 'markCtrl'
		}).when('/notes', {
			templateUrl: 'reader/readPages/note.html',
			controller: 'notCtrl'

		}).when('/select', {
			templateUrl: 'reader/bookcity/select.html',
			controller: 'selectCtrl'
		}).when('/super', {
			templateUrl: 'reader/bookcity/super.html',
			controller: 'superCtrl'
		}).when('/newbook', {
			templateUrl: 'reader/bookcity/newbook.html'
		}).when('/list', {
			templateUrl: 'reader/bookcity/list.html'
		}).when('/classify', {
			templateUrl: 'reader/bookcity/classify.html'
		}).when('/bookshow', {
			templateUrl: 'reader/bookcity/bookshow.html'

		}).when('/my', {
			templateUrl: 'reader/my/my.html',
			controller:'myCtrl'
		}).when('/myone', {
			templateUrl: 'reader/my/myone.html',
			controller:'myoneCtrl'
		}).when('/mytwo', {
			templateUrl: 'reader/my/mytwo.html',
			controller:'mytwoCtrl'
		}).when('/mythree', {
			templateUrl: 'reader/my/mythree.html',
			controller:'mythreeCtrl'
		}).when('/myfour', {
			templateUrl: 'reader/my/myfour.html',
			controller:'myfourCtrl'
		}).when('/myfive', {
			templateUrl: 'reader/my/myfive.html',
			controller:'myfiveCtrl'
		}).when('/mysix', {
			templateUrl: 'reader/my/mysix.html',
			controller:'mysixCtrl'
=======
	function($routeProvider){
		$routeProvider.when('/',{
			templateUrl:'reader/login/Login.html',
			controller:'loginCtrl'
		}).when('/bookshelf',{
			templateUrl:'reader/bookshelf/bookshelf.html',
			controller:''
		}).when('/readPage',{
			templateUrl:'reader/readPages/readPage.html',
			controller:'readCtrl'
		}).when('/bookmark',{
			templateUrl:'reader/readPages/bookmark.html',
			controller:'markCtrl'
		}).when('/notes',{
			templateUrl:'reader/readPages/note.html',
			controller:'notCtrl'
		}).when('/select',{
			templateUrl:'reader/bookcity/select.html',
			controller:'selectCtrl'
		}).when('/super',{
			templateUrl:'reader/bookcity/super.html',
			controller:'superCtrl'
		}).when('/newbook',{
			templateUrl:'reader/bookcity/newbook.html'
		}).when('/list',{
			templateUrl:'reader/bookcity/list.html'
		}).when('/classify',{
			templateUrl:'reader/bookcity/classify.html'
		}).when('/bookshow',{
			templateUrl:'reader/bookcity/bookshow.html'
		}).when('/page1',{
			templateUrl:'reader/pages/page1.html',
		}).when('/bookmark',{
			templateUrl:'reader/readPages/bookmark.html',
		}).when('/page3',{
			templateUrl:'reader/pages/page3.html',
		}).when('/page4',{
			templateUrl:'reader/pages/page4.html',
		}).when('/page5',{
			templateUrl:'reader/pages/page5.html',
		}).when('/page6',{
			templateUrl:'reader/pages/page6.html',
		}).when('/page7',{
			templateUrl:'reader/pages/page7.html',
>>>>>>> f1b263fb873f21a9848c877b0b5dd03c83796dab
		})
	}
])