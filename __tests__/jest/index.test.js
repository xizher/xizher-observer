/* eslint-disable no-undef */
import { test } from '@jest/globals'
import { TestClass } from '../../dist/esm/observer.test'

test('能够通过on和fire函数绑定和触发监听事件', () => {
  const testObj = new TestClass()
  let count = 0
  testObj.on('inc', () => {
    count++
  })
  testObj.on('dev', () => {
    count++
  })
  testObj.inc() // +1
  testObj.inc() // +1
  testObj.inc() // +1
  testObj.dec() // +1
  testObj.dec() // +1
  expect(count).toBe(5)
})

test('能够通过off方法解除监听函数的绑定状态', () => {
  const testObj = new TestClass()
  let count = 0
  const handler = testObj.on('inc', () => {
    count++
  })
  testObj.on('dev', () => {
    count++
  })
  testObj.inc() // +1
  testObj.inc() // +1
  handler.remove()
  testObj.dec() // +1
  testObj.inc()
  testObj.dec() // +1
  expect(count).toBe(4)
})

test('能够通过off方法接解除所有监听函数的绑定状态', () => {
  const testObj = new TestClass()
  let count = 0
  testObj.on('inc', () => {
    count++
  })
  testObj.on('inc', () => {
    count++
  })
  testObj.on('dev', () => {
    count++
  })
  testObj.inc() // +2
  testObj.dec() // +1
  testObj.off('inc')
  testObj.inc()
  testObj.inc()
  testObj.dec() // +1
  expect(count).toBe(4)
})

test('能够通过remove方法解除监听函数的绑定状态', () => {
  const testObj = new TestClass()
  let count = 0
  const handler = testObj.on('inc', () => {
    count++
  })
  handler.remove()
  testObj.inc()
  expect(count).toBe(0)
})

test('手动一次性监听方法', () => {
  const testObj = new TestClass()
  let count = 0
  const handler = testObj.on('inc', () => {
    count++
    handler.remove()
  })
  testObj.inc()
  testObj.inc()
  expect(count).toBe(1)
})


test('自动一次性监听方法', () => {
  const testObj = new TestClass()
  let count = 0
  testObj.once('inc', e => {
    count += e.value
  })
  testObj.inc()
  testObj.inc()
  testObj.inc()
  expect(count).toBe(2)
})
