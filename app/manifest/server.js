// This file is generated by Sapper — do not edit it!
import _0 from '../../routes/index.html';
import register0 from '../../routes/register/index.html';
import settings0 from '../../routes/settings/index.html';
import article_$slug$0 from '../../routes/article/[slug].html';
import editor_$slug$0 from '../../routes/editor/[slug].html';
import login0 from '../../routes/login/index.html';
import * as auth_register0 from '../../routes/auth/register.js';
import * as auth_logout0 from '../../routes/auth/logout.js';
import * as auth_login0 from '../../routes/auth/login.js';
import * as auth_save0 from '../../routes/auth/save.js';
import * as auth_user0 from '../../routes/auth/user.js';
import $user$_$view$0 from '../../routes/[user]/[view].html';

export const routes = [
	{ id: '_', pattern: /^\/?$/, params: () => ({}), handlers: [{ type: 'page', module: _0 }] },
	{ id: 'register', pattern: /^\/register\/?$/, params: () => ({}), handlers: [{ type: 'page', module: register0 }] },
	{ id: 'settings', pattern: /^\/settings\/?$/, params: () => ({}), handlers: [{ type: 'page', module: settings0 }] },
	{ id: 'article_$slug$', pattern: /^\/article(?:\/([^\/]+?))?\/?$/, params: match => ({ slug: match[1] }), handlers: [{ type: 'page', module: article_$slug$0 }] },
	{ id: 'editor_$slug$', pattern: /^\/editor(?:\/([^\/]+?))?\/?$/, params: match => ({ slug: match[1] }), handlers: [{ type: 'page', module: editor_$slug$0 }] },
	{ id: 'login', pattern: /^\/login\/?$/, params: () => ({}), handlers: [{ type: 'page', module: login0 }] },
	{ id: 'auth_register', pattern: /^\/auth\/register\/?$/, params: () => ({}), handlers: [{ type: 'route', module: auth_register0 }] },
	{ id: 'auth_logout', pattern: /^\/auth\/logout\/?$/, params: () => ({}), handlers: [{ type: 'route', module: auth_logout0 }] },
	{ id: 'auth_login', pattern: /^\/auth\/login\/?$/, params: () => ({}), handlers: [{ type: 'route', module: auth_login0 }] },
	{ id: 'auth_save', pattern: /^\/auth\/save\/?$/, params: () => ({}), handlers: [{ type: 'route', module: auth_save0 }] },
	{ id: 'auth_user', pattern: /^\/auth\/user\/?$/, params: () => ({}), handlers: [{ type: 'route', module: auth_user0 }] },
	{ id: '$user$_$view$', pattern: /^(?:\/([^\/]+?)(?:\/([^\/]+?))?)?\/?$/, params: match => ({ user: match[1], view: match[2] }), handlers: [{ type: 'page', module: $user$_$view$0 }] }
];