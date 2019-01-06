import * as React from 'react';

import ProjectList from "../project-management/project-list/ProjectList";

export default class HelloWorld extends React.Component<{}, {}> {
  public render(): React.ReactElement<{}> {
    return (
      <div>
        <ProjectList />
      </div>
    );
  }
}
