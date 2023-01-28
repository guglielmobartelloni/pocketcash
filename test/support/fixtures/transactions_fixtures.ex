defmodule Pocketcash.TransactionsFixtures do
  @moduledoc """
  This module defines test helpers for creating
  entities via the `Pocketcash.Transactions` context.
  """

  @doc """
  Generate a transaction.
  """
  def transaction_fixture(attrs \\ %{}) do
    {:ok, transaction} =
      attrs
      |> Enum.into(%{
        amount: "120.5",
        date: ~D[2023-01-27],
        title: "some title"
      })
      |> Pocketcash.Transactions.create_transaction()

    transaction
  end
end
