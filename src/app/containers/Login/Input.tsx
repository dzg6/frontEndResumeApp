import React from 'react';
import styled from 'styled-components/macro';

interface Props {
  field: string;
  type:string;
  clicked:bool;
}

const onClickCheck = (evt: React.ChangeEvent<HTMLInputElement>) => {
//  if( evt.currentTarget.value === "Username"){
    console.log(this.clicked);
    console.log("clicked");
//  }
  // dispatch(actions.changeUsername(evt.currentTarget.value));
  // dispatch(actions.loadRepos());
};
export function Input({ field, type, clicked }: Props) {
  return (
    <>


        <InputForm
        type={type}
        placeholder={field}
        />
      </>
  );
}

const InputForm = styled.input`
    font-size: 16px;
    outline: 0;
    margin:5px 0 ;
    `;

const Div = styled.div`
    flex-direction: column;
    padding: 0 8px;

`;
