// import { useUpgradeContract } from "../../hooks/useUpgradeContract";
import { useUpgrade } from "../../hooks/useUpgrade";

const Panel = ({data}) => {
  const upgradeAddress = data[0];
  const info = upgradeAddress? useUpgrade(upgradeAddress) : undefined
  // console.log('asdf', info)

  let ui = data? <div>Generating package {data[0]}...</div> : <div>Select from the menu to display a package...</div>
  
  return (
    <main>
      <section>
        <p>This page will show...</p>
          <ul>
            <li>Contracts to be added/removed/replaced</li>
            <li>The action - add/remove/replace</li>
            <li>The selectors in front-end component form</li>
          </ul>
        <div id='blocks'>
          <div>{ui}</div>
          {/* <div className='block' id='red'></div>
          <div className='block' id='green'></div>
          <div className='block' id='blue'></div> */}
        </div>
      </section>

      <style jsx>{`
        div {
          word-break: break-all;
        }
        #blocks {
          display: flex;
          flex-wrap: wrap;
          justify-content: space-between;
        }
        .block {
          height: 25em;
          width: 25em;
        }
        #red { background: red; }
        #green { background: green; }
        #blue { background: blue; }
        
        main {
          min-width: 20em;
          position: relative;
          height: 100vh;
          margin: auto;
          overflow: scroll;
        }
        section {
          position:absolute;
          margin: auto;
        }
      `}</style>
    </main>
  );
}

export default Panel;