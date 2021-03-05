import React from 'react';

import Sidebar from '../../components/sidebar/sidebar';
import Headers from '../../components/header/header'

import './Users.css'


// import { Container } from './styles';

const Users = () => {
  return (
    <div className="userPage">
      <Sidebar />

      <div className="userContent">

        <Headers />

        <div className="user">

          <table>
            <thead>
              <tr>
                <th>Nome</th>
              </tr>
              <tr>
                <th>Email</th>
              </tr>
              <tr className="type">
                <th>Tipo</th>
              </tr>
              <tr>
                <th>data de Cadastro</th>
              </tr>
              <tr>
                <th>Opções</th>
              </tr>
            </thead>

            <tbody>
              <tr>
                <td>Matheus</td>
              </tr>
              <tr>
                <td>matheus@email.com</td>
              </tr>
              <tr className="type">
                <td>1</td>
              </tr>
              <tr>
                <td>12-02-1999</td>
              </tr>
              <tr>
                <td>Excluir/alterar</td>
              </tr>
            </tbody>

            <tbody>
              <tr>
                <td>Matheus</td>
              </tr>
              <tr>
                <td>matheus@email.com</td>
              </tr>
              <tr className="type">
                <td>1</td>
              </tr>
              <tr>
                <td>12-02-1999</td>
              </tr>
              <tr>
                <td>Excluir/alterar</td>
              </tr>
            </tbody>

            <tbody>
              <tr>
                <td>Matheus</td>
              </tr>
              <tr>
                <td>matheus@email.com</td>
              </tr>
              <tr className="type">
                <td>1</td>
              </tr>
              <tr>
                <td>12-02-1999</td>
              </tr>
              <tr>
                <td>Excluir/alterar</td>
              </tr>
            </tbody>

            <tbody>
              <tr>
                <td>Matheus</td>
              </tr>
              <tr>
                <td>matheus@email.com</td>
              </tr>
              <tr className="type">
                <td>1</td>
              </tr>
              <tr>
                <td>12-02-1999</td>
              </tr>
              <tr>
                <td>Excluir/alterar</td>
              </tr>
            </tbody>

          </table>
        </div>

      </div>
    </div>
  );
}

export default Users;