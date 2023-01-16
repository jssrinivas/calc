<!DOCTYPE html>
<html>
  <head>
    <title>Calcualator</title>
  </head>
  <body>
    <h1>The Calculator</h1>
    <form>
      <table>
        <tr>
          <td>Enter the first number:</td>
          <td><input type="number" id="num1"></td>
        </tr>
        <tr>
          <td>Enter the second number:</td>
          <td><input type="number" id="num2"></td>
        </tr>
      </table>
    </form>
    <table>
      <tr>
        <td>
          <form onclick="myFuncAdd()">
            <span><input type="button" value="Add"></span>
          </form>
        </td>
        
        <td>
          <form onclick="myFuncMul()">
            <span><input type="button" value="Multiply"></span>
          </form>
        </td>
        
        <td>
          <form onclick="myFuncDiv()">
            <span><input type="button" value="Division"></span>
          </form>
        </td>
        
        <td>
          <form onclick="myFuncPow()">
            <span><input type="button" value="Power"></span>
          </form>
        </td>
      </tr>
  </body>
</html>
