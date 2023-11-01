#!/usr/bin/env node
// This line above makes it an executable script

const scaffold = require('./scripts/scaffold');

const args = process.argv.slice(2);

// You can add more sophisticated argument parsing here
if (args.includes('--scaffold')) {
  scaffold();
} else {
  console.log('Usage: microservice-auth --scaffold');
}
