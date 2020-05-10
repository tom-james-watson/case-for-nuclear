import * as React from 'react'
import {Doughnut} from 'react-chartjs-2'
import classnames from 'classnames'
import {ButtonGroup, Button, Classes} from '@blueprintjs/core'
import styles from './ProductionAndEmissions.scss'

const productionData = [4, 7, 4, 27, 24, 34]
const emissionsData = [0.2, 0.5, 0.3, 39, 20, 40]

enum TabName {
  Production = "PRODUCTION",
  Emissions = "EMISSIONS"
}

export default function ProductionAndEmissions() {
  const [selectedTabId, setSelectedTabId] = React.useState<TabName>(TabName.Production)

  const data = React.useMemo(() => {
    console.log('memo', selectedTabId === TabName.Production ? [...productionData] : [...emissionsData])
    return {
      labels: [
        'Nuclear',
        'Hydro',
        'Other (Renewables)',
        'Coal',
        'Gas',
        'Oil'
      ],
      datasets: [{
        data: selectedTabId === TabName.Production ? [...productionData] : [...emissionsData],
        backgroundColor: [
          '#43BF4D',
          '#669EFF',
          '#B6D94C',
          '#63411E',
          '#A66321',
          '#182026'
        ],
      }]
    }
  }, [selectedTabId])

  console.log(selectedTabId, data.datasets[0].data)

  const productionClassNames = classnames({
    [Classes.ACTIVE]: selectedTabId === TabName.Production
  })
  const emissionsClassNames = classnames({
    [Classes.ACTIVE]: selectedTabId === TabName.Emissions
  })

  return (
    <>
      <div className={styles.toggleContainer}>
        <ButtonGroup className={styles.toggle}>
          <Button
            className={productionClassNames}
            onClick={() => setSelectedTabId(TabName.Production)}
          >
            Production
          </Button>
          <Button
            className={emissionsClassNames}
            onClick={() => setSelectedTabId(TabName.Emissions)}
          >
            Emissions
          </Button>
        </ButtonGroup>
      </div>
      <Doughnut data={data} />
    </>
  )
}
