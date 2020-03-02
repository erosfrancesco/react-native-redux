//
//  RCTBridge.m
//  StartingPoint
//
//  Created by Eros Reale on 27/02/2020.
//  Copyright © 2020 Facebook. All rights reserved.
//

#import <Foundation/Foundation.h>
#import "StartingPoint-Bridging-Header.h"


#pragma mark Interface
@interface RNCMainController: UIViewController <RCTBridgeModule, RCTBridgeDelegate>
  -(void)test:(NSString *)text;

  // all the methods that show/build native views and xibs
-(void)goToCounterView;
@end



#pragma mark Implementation
@implementation RNCMainController

  + (BOOL)requiresMainQueueSetup
  {
    return NO;
  }

  RCT_EXPORT_MODULE(NativeVC);

  RCT_EXPORT_METHOD(test:(NSString *)text)
  {
    NSLog(@"Testing native module comunication: %@", text);
  }

  RCT_EXPORT_METHOD(goToCounterView)
  {
    UIViewController* vc = [UIViewController new];
    UIViewController* root = UIApplication.sharedApplication.keyWindow.rootViewController;
    
    [root presentViewController:vc animated:true completion:^() {
      
    }];
    
  }
@end
