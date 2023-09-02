import React from "react";

function Bio(props)
{
  return <p>{props.bio}</p>
}

function noBio()
{
  return null;
}
export function checkBio(props)
{
  const bioStatus = props.bioStatus;
  if(bioStatus)
  {
    return <Bio />;
  }
  return <noBio />;
}

