import { utils } from '@mirrormedia/lilith-core'
import { list } from '@keystone-6/core'
import { relationship, integer } from '@keystone-6/core/fields'

const { allowRoles, admin } = utils.accessControl

const listConfigurations = list({
  fields: {
    order: integer({
      label: '排序',
      validation: {
        min: 1,
        max: 9999,
      },
      isIndexed: 'unique',
    }),
    section: relationship({
      ref: 'Section',
      label: '分區',
    }),
    category: relationship({
      ref: 'Category',
      label: '小分類',
    }),
  },
  hooks: {
    validateInput: ({ operation, inputData, item, addValidationError }) => {
      const { section } = inputData
      const { category } = inputData

      switch (operation) {
        case 'create': {
          if (section !== undefined && category !== undefined) {
            addValidationError('大分類跟小分類只要選擇其中一個')
          } else if (section === undefined && category === undefined) {
            addValidationError('大分類跟小分類至少選擇其中一個')
          }
          break
        }
        case 'update': {
          const sectionId = item.sectionId
          const categoryId = item.categoryId

          if (sectionId !== null) {
            if (
              section?.disconnect !== undefined &&
              category?.connect === undefined
            ) {
              addValidationError('大分類跟小分類至少選擇其中一個')
            } else if (
              section?.disconnect === undefined &&
              category?.connect !== undefined
            ) {
              addValidationError('大分類跟小分類只要選擇其中一個')
            }
          } else if (categoryId !== null) {
            if (
              category?.disconnect !== undefined &&
              section?.connect === undefined
            ) {
              addValidationError('大分類跟小分類至少選擇其中一個')
            } else if (
              category?.disconnect === undefined &&
              section?.connect !== undefined
            ) {
              addValidationError('大分類跟小分類只要選擇其中一個')
            }
          }
          break
        }
        default:
          break
      }
    },
  },
  ui: {
    labelField: 'id',
    listView: {
      initialColumns: ['id', 'order', 'section', 'category'],
      initialSort: { field: 'id', direction: 'DESC' },
      pageSize: 50,
    },
  },
  access: {
    operation: {
      query: allowRoles(admin),
      update: allowRoles(admin),
      create: allowRoles(admin),
      delete: allowRoles(admin),
    },
  },
})

export default utils.addTrackingFields(listConfigurations)
