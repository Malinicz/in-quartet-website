import React from 'react';
import { Layout } from '~/components';

import { PL } from '~/constants/supportedLanguages';
import content from '~/constants/content';

const MainPage = () => <Layout data={content[PL]} />;

export default MainPage;
