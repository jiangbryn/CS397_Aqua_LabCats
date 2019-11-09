import CustomTabs from "./CustomTabs";
import React from 'react';
import {render, fireEvent} from '@testing-library/react';
import Icon from "@material-ui/core/Icon";

test('CustomTabs', () => {
	const tabs = [{
		              tabName: "tab1",
		              tabContent: (
		              <div>
		              	Tab1
		              </div>
		              )
		            },
		            {
		              tabName: "tab2",
		              tabContent: (
		              <div>
		              	Tab2
		              </div>
		              )
		            }]
  const {getByTestId} = render(
	  <CustomTabs
	    title="test"
	    headerColor="primary"
	    tabs={tabs}
	  />
  )
})