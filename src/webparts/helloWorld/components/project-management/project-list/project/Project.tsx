import * as React from 'react';

/*
import { Customer } from '../../../../../../models/Customer';
import { Utils } from '../../../../../../common/Utils';
import { Api } from '../../../../../../services/Api';

import User from '../../../user/User';
import GreenButton from '../../../ui/green-button/GreenButton';
import Grid from '../../../../../../shared/components/grid/Grid';
*/


import { Customer } from '@src/models';
import { Utils } from '@src/common';
import { Api } from '@src/services';

import User from '@hello-world-components/user';
import GreenButton from '@hello-world-components/ui/green-button';
import Grid from '@components/grid';

export default class Project extends React.Component<{}, {}> {
  public render(): React.ReactElement<{}> {
    console.log(Utils);
    console.log(Customer);
    console.log(Api);

    return (
      <div>
        Project
        <User />
        <Grid />
        <GreenButton />
      </div>
    );
  }
}
