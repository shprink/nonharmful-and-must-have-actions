# Hello world javascript action

## Inputs

### `my-secret`

**Required** The secret that you wish nobody could see. Default `"not-so-secret :P"`.

## Example usage

uses: shprink/nonharmful-and-must-have-actions@v1
with:
  my-secret: ${{ secrets.MY_SECRET }}
