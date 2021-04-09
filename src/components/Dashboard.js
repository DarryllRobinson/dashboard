import React from 'react';
import { VictoryArea, VictoryBar, VictoryChart, VictoryTheme } from 'victory';
import MieLogo from '../images/mie-logo.jpeg';
//import { customTheme } from '../themes/victory-theme';

const Dashboard = () => {
  return (
    <div className="ui fluid container" style={{ background: '#132042' }}>
      <div className="ui equal width grid stackable">
        <div className="ui two column grid">
          <div className="four wide column">
            <div className="ui segment" style={{ height: '200', width: '300' }}>
              <img src={MieLogo} alt="mie logo" />
            </div>
          </div>
          <div className="twelve wide column">
            <div className="ui segment ">
              <VictoryChart
                height={300}
                theme={VictoryTheme.material}
                width={1500}
              >
                <VictoryArea />
              </VictoryChart>
            </div>
          </div>
          <div className="four wide column">
            <table className="ui three column unstackable celled striped table">
              <thead>
                <tr>
                  <th>Name</th>
                  <th>Amount</th>
                  <th>Since</th>
                </tr>
              </thead>
              <tbody>
                <tr className="negative">
                  <td>Joe Bloggs</td>
                  <td>R 123</td>
                  <td className="right aligned">3 days ago</td>
                </tr>
                <tr className="negative">
                  <td>Sonny Jim</td>
                  <td>R 999</td>
                  <td className="right aligned">2 days ago</td>
                </tr>
                <tr className="negative">
                  <td>Darth Vader</td>
                  <td>R 454</td>
                  <td className="right aligned">1 day ago</td>
                </tr>
                <tr>
                  <td>Peter Parker</td>
                  <td>R 10000</td>
                  <td className="right aligned">12 hours ago</td>
                </tr>
                <tr>
                  <td>Bruce Banner</td>
                  <td>R 1111</td>
                  <td className="right aligned">3 hours ago</td>
                </tr>
                <tr className="negative">
                  <td>Darth Vader</td>
                  <td>R 454</td>
                  <td className="right aligned">1 day ago</td>
                </tr>
                <tr>
                  <td>Peter Parker</td>
                  <td>R 10000</td>
                  <td className="right aligned">12 hours ago</td>
                </tr>
                <tr>
                  <td>Bruce Banner</td>
                  <td>R 1111</td>
                  <td className="right aligned">3 hours ago</td>
                </tr>
              </tbody>
            </table>
          </div>
          <div className="twelve wide column">
            <div className="ui grid stackable">
              <div className="eight wide column">
                <div className="ui segment ">
                  <VictoryChart theme={VictoryTheme.material} width={1500}>
                    <VictoryBar style={{ data: { fill: 'grey' } }} />
                  </VictoryChart>
                  <table className="ui three column unstackable celled table">
                    <thead>
                      <tr>
                        <th>Rank</th>
                        <th>Name</th>
                        <th>Collected</th>
                      </tr>
                    </thead>
                    <tbody>
                      <tr>
                        <td>1</td>
                        <td>Agent Smith</td>
                        <td>R 1 000 000</td>
                      </tr>
                      <tr>
                        <td>2</td>
                        <td>Goodie Two-Shoes</td>
                        <td>R 990 000</td>
                      </tr>
                      <tr>
                        <td>3</td>
                        <td>Pixie Dust</td>
                        <td>R 750 225</td>
                      </tr>
                      <tr>
                        <td>4</td>
                        <td>Tinkerbell</td>
                        <td>R 50 325</td>
                      </tr>
                    </tbody>
                  </table>
                </div>
              </div>
              <div className="eight wide column">
                <div className="ui segment ">
                  <VictoryChart
                    domainPadding={{ x: 20, y: 5 }}
                    padding={{ top: 50, bottom: 50, left: 80, right: 20 }}
                    theme={VictoryTheme.material}
                    width={1500}
                  >
                    <VictoryBar style={{ data: { fill: 'grey' } }} />
                  </VictoryChart>
                  <VictoryChart
                    domainPadding={{ x: 20, y: 5 }}
                    padding={{ top: 50, bottom: 50, left: 80, right: 20 }}
                    theme={VictoryTheme.material}
                    width={1500}
                  >
                    <VictoryBar style={{ data: { fill: 'grey' } }} />
                  </VictoryChart>
                  <VictoryChart
                    domainPadding={{ x: 20, y: 5 }}
                    padding={{ top: 50, bottom: 50, left: 80, right: 20 }}
                    theme={VictoryTheme.material}
                    width={1500}
                  >
                    <VictoryBar style={{ data: { fill: 'grey' } }} />
                  </VictoryChart>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Dashboard;

/*

(
  <div className="ui fluid container" style={{ background: '#08435B' }}>
    <div className="ui equal width grid stackable">
      <div className="ui two column grid">
        <div className="four wide column">
          <div className="ui segment" style={{ height: '200', width: '300' }}>
            <img src={MieLogo} alt="mie logo" height="200" width="300" />
          </div>
        </div>
        <div className="twelve wide column">
          <div className="ui segment ">
            <VictoryChart
              theme={VictoryTheme.material}
              height={300}
              width={1500}
            >
              <VictoryArea style={{ data: { fill: 'grey' } }} />
            </VictoryChart>
          </div>
        </div>
        <div className="four wide column">
          <div className="ui three column unstackable celled striped table">
            <thead>
              <tr>
                <th>Name</th>
                <th>Amount</th>
                <th>Since</th>
              </tr>
            </thead>
            <tbody>
              <tr className="negative">
                <td>Joe Bloggs</td>
                <td>R 123</td>
                <td className="right aligned">3 days ago</td>
              </tr>
              <tr className="negative">
                <td>Sonny Jim</td>
                <td>R 999</td>
                <td className="right aligned">2 days ago</td>
              </tr>
              <tr className="negative">
                <td>Darth Vader</td>
                <td>R 454</td>
                <td className="right aligned">1 day ago</td>
              </tr>
              <tr>
                <td>Peter Parker</td>
                <td>R 10000</td>
                <td className="right aligned">12 hours ago</td>
              </tr>
              <tr>
                <td>Bruce Banner</td>
                <td>R 1111</td>
                <td className="right aligned">3 hours ago</td>
              </tr>
            </tbody>
          </div>
        </div>
        <div className="twelve wide column">
          <div className="ui grid stackable">
            <div className="eight wide column">
              <div className="ui segment ">
                <VictoryChart theme={VictoryTheme.material} width={1500}>
                  <VictoryBar style={{ data: { fill: 'grey' } }} />
                </VictoryChart>
                <div className="ui three column unstackable celled table">
                  <thead>
                    <tr>
                      <th>Rank</th>
                      <th className="ten wide">Name</th>
                      <th>Collected</th>
                    </tr>
                  </thead>
                  <tbody>
                    <tr>
                      <td>1</td>
                      <td>Agent Smith</td>
                      <td>R 1 000 000</td>
                    </tr>
                    <tr>
                      <td>2</td>
                      <td>Goodie Two-Shoes</td>
                      <td>R 990 000</td>
                    </tr>
                    <tr>
                      <td>3</td>
                      <td>Pixie Dust</td>
                      <td>R 750 225</td>
                    </tr>
                  </tbody>
                </div>
              </div>
            </div>
            <div className="eight wide column">
              <div className="ui segment ">
                <VictoryChart theme={VictoryTheme.material} width={1500}>
                  <VictoryBar style={{ data: { fill: 'grey' } }} />
                </VictoryChart>
                <VictoryChart theme={VictoryTheme.material} width={1500}>
                  <VictoryBar style={{ data: { fill: 'grey' } }} />
                </VictoryChart>
                <VictoryChart theme={VictoryTheme.material} width={1500}>
                  <VictoryBar style={{ data: { fill: 'grey' } }} />
                </VictoryChart>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  </div>
);

(
  <div className="ui fluid container" style={{ background: '#08435B' }}>
    <div className="ui grid stackable">
      <div className="row">
        <div className="column">
          <div className="ui segment ">Profile</div>
        </div>
        <div className="column">
          <div className="ui segment ">Main chart</div>
        </div>
      </div>
      <div className="row">
        <div className="column">
          <div className="ui segment ">Top rows</div>
        </div>
        <div className="column">
          <div className="ui segment ">Leaderboard</div>
        </div>
        <div className="column">
          <div className="ui segment ">Rankings</div>
        </div>
        <div className="column">
          <div className="ui segment ">Chart 1</div>
        </div>
        <div className="column">
          <div className="ui segment ">Chart 2</div>
        </div>
        <div className="column">
          <div className="ui segment ">Chart 3</div>
        </div>
      </div>
    </div>
  </div>
);




<div className="ui two column doubling stackable grid container">
  <div className="row">
    <div className="four wide column">
      <div className="ui fluid segment ">Profile</div>
    </div>
    <div className="eight wide column" style={{ background: '##08435B' }}>
      <VictoryChart theme={VictoryTheme.material} width={1500}>
        <VictoryArea style={{ data: { fill: '#08435B' } }} />
      </VictoryChart>
    </div>
  </div>

  <div className="row">
    <div className="three wide column">
      <div className="ui fluid segment ">Second row</div>
    </div>
    <div className="three wide column">
      <div className="ui fluid segment ">Second row</div>
    </div>
    <div className="three wide column">
      <div className="ui fluid segment ">Second row</div>
    </div>
  </div>
</div>
*/
