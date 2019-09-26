## Plugin [@loopmediagroup/robo-config-plugin](https://www.npmjs.com/package/@loopmediagroup/robo-config-plugin)

- <a name="loopmediagrouprobo-config-plugin-task-idx-ref-assortedservice">:open_file_folder:</a> <a href="#loopmediagrouprobo-config-plugin-task-ref-assortedservice">`assorted/@service`</a>
  - <a name="loopmediagrouprobo-config-plugin-task-idx-ref-structservice">:open_file_folder:</a> <a href="#loopmediagrouprobo-config-plugin-task-ref-structservice">`struct/#service`</a>
    - <a name="loopmediagrouprobo-config-plugin-task-idx-ref-structservice-src-handler-trigger-register">:clipboard:</a> <a href="#loopmediagrouprobo-config-plugin-task-ref-structservice-src-handler-trigger-register">`struct/service-src-handler-trigger-register`</a>
    - <a name="loopmediagrouprobo-config-plugin-task-idx-ref-structservice-src-core-sdu">:clipboard:</a> <a href="#loopmediagrouprobo-config-plugin-task-ref-structservice-src-core-sdu">`struct/service-src-core-sdu`</a>

### :open_file_folder: <a name="loopmediagrouprobo-config-plugin-task-ref-assortedservice">assorted/@service</a> (<a href="#loopmediagrouprobo-config-plugin-task-idx-ref-assortedservice">`index`</a>)

Manage LoopMediaGroup service setup.

<table>
  <tbody>
    <tr>
      <th>Targets</th>
      <th>Requires</th>
    </tr>
    <tr>
      <td align="left" valign="top">
        <ul>
<code>project</code><br/>
<code>└─&nbsp;src</code><br/>
<code>&nbsp;&nbsp;&nbsp;├─&nbsp;core</code><br/>
<code>&nbsp;&nbsp;&nbsp;│&nbsp;&nbsp;└─&nbsp;<a href="#loopmediagrouprobo-config-plugin-target-ref-srccoresdujs">sdu.js</a></code><br/>
<code>&nbsp;&nbsp;&nbsp;└─&nbsp;handler</code><br/>
<code>&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;└─&nbsp;trigger</code><br/>
<code>&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;└─&nbsp;<a href="#loopmediagrouprobo-config-plugin-target-ref-srchandlertriggerregisterjs">register.js</a></code><br/>
        </ul>
      </td>
      <td align="left" valign="top">
        <ul>
          <li><a href="#loopmediagrouprobo-config-plugin-req-ref-javascript">javascript</a></li>
          <li><a href="#loopmediagrouprobo-config-plugin-req-ref-aws">aws</a></li>
          <li><a href="#loopmediagrouprobo-config-plugin-req-ref-serverless">serverless</a></li>
        </ul>
      </td>
    </tr>
  </tbody>
</table>

#### :open_file_folder: <a name="loopmediagrouprobo-config-plugin-task-ref-structservice">struct/#service</a> (<a href="#loopmediagrouprobo-config-plugin-task-idx-ref-structservice">`index`</a>)

Manage service project structure.

<table>
  <tbody>
    <tr>
      <th>Targets</th>
      <th>Requires</th>
    </tr>
    <tr>
      <td align="left" valign="top">
        <ul>
<code>project</code><br/>
<code>└─&nbsp;src</code><br/>
<code>&nbsp;&nbsp;&nbsp;├─&nbsp;core</code><br/>
<code>&nbsp;&nbsp;&nbsp;│&nbsp;&nbsp;└─&nbsp;<a href="#loopmediagrouprobo-config-plugin-target-ref-srccoresdujs">sdu.js</a></code><br/>
<code>&nbsp;&nbsp;&nbsp;└─&nbsp;handler</code><br/>
<code>&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;└─&nbsp;trigger</code><br/>
<code>&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;└─&nbsp;<a href="#loopmediagrouprobo-config-plugin-target-ref-srchandlertriggerregisterjs">register.js</a></code><br/>
        </ul>
      </td>
      <td align="left" valign="top">
        <ul>
          <li><a href="#loopmediagrouprobo-config-plugin-req-ref-javascript">javascript</a></li>
          <li><a href="#loopmediagrouprobo-config-plugin-req-ref-aws">aws</a></li>
          <li><a href="#loopmediagrouprobo-config-plugin-req-ref-serverless">serverless</a></li>
        </ul>
      </td>
    </tr>
  </tbody>
</table>

##### :clipboard: <a name="loopmediagrouprobo-config-plugin-task-ref-structservice-src-handler-trigger-register">struct/service-src-handler-trigger-register</a> (<a href="#loopmediagrouprobo-config-plugin-task-idx-ref-structservice-src-handler-trigger-register">`index`</a>)

_Updating <a href="#loopmediagrouprobo-config-plugin-target-ref-srchandlertriggerregisterjs">src/handler/trigger/register.js</a> using <a href="#loopmediagrouprobo-config-plugin-strat-ref-overwrite">overwrite</a>._

- Define Service Discovery registration hook setup.

<table>
  <tbody>
    <tr>
      <th>Targets</th>
      <th>Requires</th>
    </tr>
    <tr>
      <td align="left" valign="top">
        <ul>
<code>project</code><br/>
<code>└─&nbsp;src</code><br/>
<code>&nbsp;&nbsp;&nbsp;└─&nbsp;handler</code><br/>
<code>&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;└─&nbsp;trigger</code><br/>
<code>&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;└─&nbsp;<a href="#loopmediagrouprobo-config-plugin-target-ref-srchandlertriggerregisterjs">register.js</a></code><br/>
        </ul>
      </td>
      <td align="left" valign="top">
        <ul>
          <li><a href="#loopmediagrouprobo-config-plugin-req-ref-javascript">javascript</a></li>
          <li><a href="#loopmediagrouprobo-config-plugin-req-ref-aws">aws</a></li>
          <li><a href="#loopmediagrouprobo-config-plugin-req-ref-serverless">serverless</a></li>
        </ul>
      </td>
    </tr>
  </tbody>
</table>

##### :clipboard: <a name="loopmediagrouprobo-config-plugin-task-ref-structservice-src-core-sdu">struct/service-src-core-sdu</a> (<a href="#loopmediagrouprobo-config-plugin-task-idx-ref-structservice-src-core-sdu">`index`</a>)

_Updating <a href="#loopmediagrouprobo-config-plugin-target-ref-srccoresdujs">src/core/sdu.js</a> using <a href="#loopmediagrouprobo-config-plugin-strat-ref-overwrite">overwrite</a>._

- Define Service Discovery Util setup.

<table>
  <tbody>
    <tr>
      <th>Targets</th>
      <th>Requires</th>
    </tr>
    <tr>
      <td align="left" valign="top">
        <ul>
<code>project</code><br/>
<code>└─&nbsp;src</code><br/>
<code>&nbsp;&nbsp;&nbsp;└─&nbsp;core</code><br/>
<code>&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;└─&nbsp;<a href="#loopmediagrouprobo-config-plugin-target-ref-srccoresdujs">sdu.js</a></code><br/>
        </ul>
      </td>
      <td align="left" valign="top">
        <ul>
          <li><a href="#loopmediagrouprobo-config-plugin-req-ref-javascript">javascript</a></li>
          <li><a href="#loopmediagrouprobo-config-plugin-req-ref-aws">aws</a></li>
          <li><a href="#loopmediagrouprobo-config-plugin-req-ref-serverless">serverless</a></li>
        </ul>
      </td>
    </tr>
  </tbody>
</table>

------

## Requires

### <a name="loopmediagrouprobo-config-plugin-req-ref-javascript">javascript</a> ([`link`](https://en.wikipedia.org/wiki/JavaScript)) 

*Programming Language.*

JavaScript, often abbreviated as JS, is a high-level, interpreted programming language that conforms to the ECMAScript specification.
It is characterized as dynamic, weakly typed, prototype-based and multi-paradigm.

### <a name="loopmediagrouprobo-config-plugin-req-ref-aws">aws</a> ([`link`](https://aws.amazon.com/)) 

*Amazon Web Services.*

Amazon Web Services (AWS) is a subsidiary of Amazon that provides on-demand cloud 
computing platforms to individuals, companies and governments, on a metered pay-as-you-go basis.

### <a name="loopmediagrouprobo-config-plugin-req-ref-serverless">serverless</a> ([`link`](https://serverless.com/)) 

*Serverless Framework.*

The Serverless Framework is a free and open-source web framework that was 
developed for building serverless applications.

------

## Targets

### <a name="loopmediagrouprobo-config-plugin-target-ref-srchandlertriggerregisterjs">src/handler/trigger/register.js</a>  

:small_red_triangle: <a href="#loopmediagrouprobo-config-plugin-req-ref-aws">aws</a>, <a href="#loopmediagrouprobo-config-plugin-req-ref-serverless">serverless</a>

:small_blue_diamond: `other`

*Service Registration Hook.*

Register the service with service discovery on deploy.

### <a name="loopmediagrouprobo-config-plugin-target-ref-srccoresdujs">src/core/sdu.js</a>  

:small_red_triangle: <a href="#loopmediagrouprobo-config-plugin-req-ref-aws">aws</a>, <a href="#loopmediagrouprobo-config-plugin-req-ref-serverless">serverless</a>

:small_blue_diamond: `other`

*Service Discovery Util.*

Initialization for Service Discovery Util.

------

## Strategies

### <a name="loopmediagrouprobo-config-plugin-strat-ref-overwrite">overwrite</a>  

:small_blue_diamond: `any`

*Simply replace the old with the new content.*

