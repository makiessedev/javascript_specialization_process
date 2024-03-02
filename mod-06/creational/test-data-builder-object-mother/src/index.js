function productValidator(product) {
  const errors = []

  if(!(product.id.length >= 2 && product.id.length <= 20)) {
    errors.push(`id: invalid length, current [${product.id}] expected to be between 2 and 20`)
  }

  if(/(\W|\d)/.test(product.name)) {
    errors.push(`Name: invalid value, current [${product.name}] expected to have only words`)
  }

  if(!(product.price >= 1 && product.price <= 1000)) {
    errors.push(`Price: invalid value, current [${product.price}] expected to be between 1 and 1000`)
  }

  if(!(['electronic', 'organic'].includes(product.category))) {
    errors.push(`Category: invalid value, current [${product.category}] expected to be either electronic or organic`)
  }

  return {
    result: errors.length === 0,
    errors
  }
}

module.exports = {
  productValidator
}