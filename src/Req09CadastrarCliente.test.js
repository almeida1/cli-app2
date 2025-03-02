import { render, screen } from "@testing-library/react";
import App from "./App";
import userEvent from "@testing-library/user-event";

test("ct01 - verifica se o estado atual da aplicação esta na tela menu de gerenciamento de clientes", () => {
  render(<App />);
  const formElement = screen.getByText(/gerenciamento de clientes/i);
  expect(formElement).toBeInTheDocument();
});
test("ct02 - verifica se link cadastrar esta na pagina", () => {
  render(<App />);
  const linkElement = screen.getByText(/cadastrar cliente/i);
  expect(linkElement).toBeInTheDocument();
});
test("ct03 - clica no link cadastrar cliente e verifica se a tela de cadastro é exibida", async () => {
  render(<App />);
  const linkElement = screen.getByTestId(/cadastrar/i);
  userEvent.click(linkElement);
  const formElement = await screen.findByTestId("cpf");
  console.log(screen.debug());
  expect(formElement).toBeInTheDocument();
});
test("ct04 - preenche o formulário de cadastro de cliente e verifica se os valores foram incluidos", async () => {
  render(<App />);
  const linkElement = screen.getByTestId(/cadastrar/i);
  userEvent.click(linkElement);

  const cpfInput = await screen.findByTestId("cpf");
  const nomeInput = await screen.findByTestId("nome");
  const cepInput = await screen.findByTestId("cep");
  const emailInput = await screen.findByTestId("email");

  await userEvent.type(cpfInput, "123.456.789-00");
  await userEvent.type(nomeInput, "João da Silva");
  await userEvent.type(cepInput, "12345-678");
  await userEvent.type(emailInput, "joao.silva@example.com");

  expect(cpfInput).toHaveValue("123.456.789-00");
  expect(nomeInput).toHaveValue("João da Silva");
  expect(cepInput).toHaveValue("12345-678");
  expect(emailInput).toHaveValue("joao.silva@example.com");
  const confirmarButton = screen.getByText("Confirmar");
  userEvent.click(confirmarButton);
});
