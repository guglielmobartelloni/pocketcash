defmodule Pocketcash.Repo do
  use Ecto.Repo,
    otp_app: :pocketcash,
    adapter: Ecto.Adapters.SQLite3
end
