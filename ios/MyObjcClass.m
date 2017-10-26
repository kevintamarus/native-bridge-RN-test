#import "MyObjcClass.h"

@implementation MyObjcClass

RCT_EXPORT_MODULE()

- (NSDictionary *)constantsToExport {
  return @{@"greeting": @"Welcome to the DevDactic\n React Native Tutorial!"};
}

RCT_EXPORT_METHOD(squareMe:(int)number:(RCTResponseSenderBlock)callback) {
  callback(@[[NSNull null], [NSNumber numberWithInt:(number*number)]]);
}

@end
