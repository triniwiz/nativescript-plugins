# NestedScrollview

|   Android Device  |   Android Emulator    |   iOS Device  |   iOS Simulator   |
| :-------------:     |:-------------:        |:-------------:| :-----:            |
| :white_check_mark:|:white_check_mark:     |:white_check_mark:|    :white_check_mark:| 

## Installing 

```bash
    ns plugin add @triniwiz/nativescript-nestedscrollview
```
## Configuration

### Core

::: tip IMPORTANT
Ensure you've included `xmlns:ui="@triniwiz/nativescript-nestedscrollview"` on the
Page element
:::


## Usage 

```xml
<ui:NestedScrollView backgroundColor="red">
      <StackLayout>
      <Label text="First" color="white" />
        <ScrollView orientation="vertical" backgroundColor="blue">
          <Repeater items="{{ items }}">
            <Repeater.itemsLayout>
              <StackLayout orientation="vertical"/>
            </Repeater.itemsLayout>
            <Repeater.itemTemplate>
              <StackLayout orientation="horizontal">
                <Label text="ID " />
                <Label text="{{ id }}" />
              </StackLayout>
            </Repeater.itemTemplate>
          </Repeater>
        </ScrollView>
        <Label text="Second" color="white" />
        <ScrollView orientation="vertical" backgroundColor="white">
          <Repeater items="{{others}}">
            <Repeater.itemsLayout>
              <StackLayout orientation="vertical" />
            </Repeater.itemsLayout>
            <Repeater.itemTemplate>
              <StackLayout orientation="horizontal">
                <Label text="ID " />
                <Label text="{{ id }}" />
              </StackLayout>
            </Repeater.itemTemplate>
          </Repeater>
        </ScrollView>
        <Label text="Third" color="white" />
        <ScrollView orientation="vertical" backgroundColor="yellow">
          <Repeater items="{{ repeaterItems }}">
            <Repeater.itemsLayout>
              <StackLayout orientation="vertical" />
            </Repeater.itemsLayout>
            <Repeater.itemTemplate>
              <StackLayout orientation="horizontal">
                <Label text="ID " />
                <Label text="{{ id }}" />
              </StackLayout>
            </Repeater.itemTemplate>
          </Repeater>
        </ScrollView>
      </StackLayout>
    </ui:NestedScrollView>
```