defmodule Pocketcash.Repo.Migrations.CreateTransactions do
  use Ecto.Migration

  def change do
    create table(:transactions) do
      add :title, :string
      add :amount, :decimal
      add :date, :date

      timestamps()
    end
  end
end
