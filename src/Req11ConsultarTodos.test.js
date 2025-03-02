import { render, screen } from "@testing-library/react";
import App from "./App";
import userEvent from "@testing-library/user-event";
test("ct01 - seleciona a opção consulta e verifica se a aplicação navegou para tela de consulta", async () => {
  render(<App />);
  const linkElement = screen.getByTestId(/consultar/i);
  userEvent.click(linkElement);
  const formElement = await screen.findByText(/Lista de Clientes/i);
  expect(formElement).toBeInTheDocument();
});
