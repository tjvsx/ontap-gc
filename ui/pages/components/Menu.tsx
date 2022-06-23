import React from "react";
import { useEthers } from '@usedapp/core'

interface TreeNode {
  name: string,
  files: TreeNode[] | string[],
  func: any
}
const TreeNode:React.FunctionComponent<TreeNode> = ({name, files, func}) => {

  const [expanded, setExpanded] = React.useState(true);

  let nodes: {};
  if (files && expanded && typeof files[0] != 'string') {
    nodes = files.map((i) => 
      <div onClick={()=>func(i.files)}>{i.name}</div>)
  }

  return (
    <li>
      <div onClick={()=>setExpanded(!expanded)}>{name}</div>
      <ul>{nodes}</ul>
    </li>
  )
}

export interface MenuProps {
  data: TreeNode[],
  func: any
}

const Menu: React.FunctionComponent<MenuProps> = ({data, func}) => {    

  const {account, activateBrowserWallet} = useEthers();
  const isConnected = account !== undefined
  
  let nodes = account? (data? data.map((i) => <TreeNode name={i.name} files={i.files} func={func} />) : <div>Loading...</div>) : <button onClick={() => activateBrowserWallet()}>Connect</button>
  
  return (
    <div>

      <ul>{nodes}</ul>

      <style jsx>{`
        div {
          position: relative;
          height: 100vh;
          overflow: scroll;
          whitespace: nowrap;
          margin: auto;
          min-width: 10em;
        }
        ul {
          position: absolute;
          height: 100%;
          list-style: none;
          cursor: pointer;
        }
      `}</style>
    </div>
  );
}

export default Menu;