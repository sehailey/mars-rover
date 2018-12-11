const chai = require('chai')
const expect = chai.expect
const cmd = '5 5\n1 2 N\nLM\n3 3 E\nMM'
const cmd2 = '5 5\n0 0 N\nM'
const cmd3 = '5 5\n1 2 N\nLMLMLMLMM\n3 3 E\nMMRMMRMRRM'

const mission = require('../src/mission')

describe('mission', () => {
  it('takes a string command as input and returns a string as output representing the location of all the rovers', () => {
    const result = mission(cmd)
    expect(result).to.equal('0 2 W\n5 3 E')
    const result2 = mission(cmd2)
    expect(result2).to.equal('0 1 N')
    const result3 = mission(cmd3)
    expect(result3).to.equal('1 3 N\n5 1 E')
  })
})
