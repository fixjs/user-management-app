/**
 * React Starter Kit (https://www.reactstarterkit.com/)
 *
 * Copyright © 2014-present Kriasoft, LLC. All rights reserved.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE.txt file in the root directory of this source tree.
 */

import React from 'react';
import {loadUsersList} from '../../utils';
import Layout from '../../components/Layout';
import Users from './Users';

const title = 'Users';

export default {

  path: '/users',

  async action({store}) {
    await loadUsersList(store);
    return {
      title,
      component: <Layout><Users title={title} /></Layout>,
    };
  },

};
