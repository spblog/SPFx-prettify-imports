import * as React from 'react';

import Project from "./project/Project";

export default class ProjectList extends React.Component<{}, {}> {
  public render(): React.ReactElement<{}> {
    return (
      <div>
        <Project />
      </div>
    );
  }
}
