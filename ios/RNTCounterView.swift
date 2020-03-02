//
//  RNTCounterViewController.swift
//  StartingPoint
//
//  Created by Eros Reale on 27/02/2020.
//  Copyright © 2020 Facebook. All rights reserved.
//

import UIKit

@objc(RNTCounterView)
class RNTCounterView: UIView {
  
  //MARK: - Outlets
  @objc @IBOutlet private weak var contentView: UIView!

  //MARK: - Lifecycle
  override init(frame: CGRect) {
      super.init(frame: frame)
      commonInit()
  }

  required init?(coder aDecoder: NSCoder) {
      super.init(coder: aDecoder)
      commonInit()
  }

  private func commonInit() {
      // init here
      Bundle.main.loadNibNamed("RNTCounterView", owner: self, options: nil)
      addSubview(contentView)
      contentView.frame = bounds
      contentView.autoresizingMask = [.flexibleHeight, .flexibleWidth]
    
    contentView.backgroundColor = .black
  }

}
