/* eslint-disable no-undef */

import { SERVER_URL_DEV, SERVER_URL_PROD, FOLDER_PATH } from './projectConfig';

export const SITE_URL =
  process.env.NODE_ENV === 'development'
    ? SERVER_URL_DEV
    : `${SERVER_URL_PROD}${FOLDER_PATH}`;

export const IMAGES_URL = `${SITE_URL}/static/images`;

export const FONTS_URL = `${SITE_URL}/static/fonts`;

export const AUDIO_URL = `${SITE_URL}/static/audio`;
