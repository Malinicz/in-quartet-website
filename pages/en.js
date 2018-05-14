import React from 'react';
import { Layout } from '~/components';

import { EN } from '~/constants/supportedLanguages';
import content from '~/constants/content';

const MainPageEnglish = () => <Layout data={content[EN]} />;

export default MainPageEnglish;
