defmodule Pocketcash.Transactions.Transaction do
  use Ecto.Schema
  import Ecto.Changeset

  schema "transactions" do
    field :amount, :decimal
    field :date, :date
    field :title, :string

    timestamps()
  end

  @doc false
  def changeset(transaction, attrs) do
    transaction
    |> cast(attrs, [:title, :amount, :date])
    |> validate_required([:title, :amount, :date])
  end
end
