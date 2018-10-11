import React from 'react';
import { Button } from 'semantic-ui-react'

const CommitButton = (props) => (
  <Button className='commit-button' size='large' onClick={() => props.addCommit(Date.now())}>
    Commit
  </Button>
);

export default CommitButton;
